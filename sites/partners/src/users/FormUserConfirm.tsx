import React, { useRef, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
  t,
  FormCard,
  Icon,
  Form,
  Field,
  Button,
  passwordRegex,
  AppearanceStyleType,
  setSiteAlertMessage,
  useMutate,
  AlertBox,
  Modal,
} from "@bloom-housing/ui-components"
import { AuthContext } from "@bloom-housing/shared-helpers"
import { useForm } from "react-hook-form"
import { LoginResponse } from "@bloom-housing/backend-core/types"
import { ReRequestConfirmation } from "./ReRequestConfirmation"

type FormUserConfirmFields = {
  password: string
  passwordConfirmation: string
  agree: boolean
}

const MIN_PASSWORD_LENGTH = 8

const FormUserConfirm = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, errors, handleSubmit, watch } = useForm<FormUserConfirmFields>()
  const router = useRouter()
  const { mutate, isLoading: isConfirmLoading, isError, reset: resetMutation } = useMutate<
    LoginResponse
  >()
  const { userService } = useContext(AuthContext)
  const { loginWithToken } = useContext(AuthContext)

  const token = router.query?.token as string

  const password = useRef({})
  password.current = watch("password", "")

  const [isLoginLoading, setLoginLoading] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)
  const [rerequestModalOpen, setRerequestModalOpen] = useState(false)
  const [newConfirmationRequested, setNewConfirmationRequested] = useState(false)

  useEffect(() => {
    if (!isSubmitting && token) {
      userService
        .isUserConfirmationTokenValid({ body: { token } })
        .then((res) => {
          if (!res) {
            setRerequestModalOpen(true)
          }
        })
        .catch(() => {
          setRerequestModalOpen(true)
        })
    }
  }, [isSubmitting, token, userService])

  const onSubmit = async (data: FormUserConfirmFields) => {
    setSubmitting(true)
    resetMutation()

    const body = {
      token,
      password: data.password,
    }

    try {
      const response = await mutate(() =>
        userService.confirm({
          body,
        })
      )

      const { accessToken } = response || {}

      if (accessToken) {
        setLoginLoading(true)
        await loginWithToken(accessToken)
        setLoginLoading(false)

        setSiteAlertMessage(t(`users.accountConfirmed`), "success")
        void router.push("/")
      } else {
        setSubmitting(false)
        setRerequestModalOpen(true)
      }
    } catch (err) {
      setSubmitting(false)
      console.error(err)
    }
  }

  if (!token) {
    return (
      <FormCard>
        <div className="form-card__group is-borderless">
          {t(`authentication.createAccount.errors.tokenMissing`)}
        </div>
      </FormCard>
    )
  }

  return (
    <>
      <FormCard>
        <div className="form-card__lead text-center border-b mx-0 px-5">
          <Icon size="2xl" symbol="settings" />
          <h2 className="form-card__title">{t("users.addPassword")}</h2>
          <p className="mt-4 field-note">{t("users.needUniquePassword")}</p>

          {isError && (
            <AlertBox className="mt-5" type="alert" closeable>
              {t(`errors.alert.badRequest`)}
            </AlertBox>
          )}

          {newConfirmationRequested && (
            <AlertBox className="mt-5" type="success" closeable>
              {t(`users.confirmationSent`)}
            </AlertBox>
          )}
        </div>

        <Form id="update-password" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-card__group is-borderless">
            <fieldset>
              <legend className="text__caps-spaced">
                {t("authentication.createAccount.password")}
              </legend>
              <p className="field-note mb-4">{t("users.makeNote")}</p>

              <div className="mt-5">
                <Field
                  type="password"
                  name="password"
                  label={t("account.settings.newPassword")}
                  note={t("authentication.createAccount.passwordInfo")}
                  placeholder={t("authentication.createAccount.mustBe8Chars")}
                  validation={{
                    required: true,
                    minLength: MIN_PASSWORD_LENGTH,
                    pattern: passwordRegex,
                  }}
                  error={!!errors?.password}
                  errorMessage={t("authentication.signIn.passwordError")}
                  register={register}
                  className={"mb-1"}
                  inputProps={{
                    autoComplete: "off",
                  }}
                />
              </div>

              <div className="mt-5">
                <Field
                  type="password"
                  name="passwordConfirmation"
                  label={t("account.settings.confirmNewPassword")}
                  placeholder={t("authentication.createAccount.mustBe8Chars")}
                  validation={{
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      t("authentication.createAccount.errors.passwordMismatch"),
                  }}
                  error={!!errors?.passwordConfirmation}
                  errorMessage={t("authentication.createAccount.errors.passwordMismatch")}
                  register={register}
                  className={"mb-1"}
                  inputProps={{
                    autoComplete: "off",
                  }}
                />
              </div>
            </fieldset>
          </div>

          <div className="form-card__pager mt-8">
            <div className="form-card__pager-row primary">
              <Button
                type="submit"
                styleType={AppearanceStyleType.primary}
                className={"items-center"}
                loading={isConfirmLoading || isLoginLoading}
              >
                {t("users.confirmAccount")}
              </Button>
            </div>
          </div>
        </Form>
      </FormCard>

      <Modal
        open={rerequestModalOpen}
        title={t("authentication.createAccount.errors.tokenExpired")}
        ariaDescription={t("users.requestResendDescription")}
        onClose={() => setRerequestModalOpen(false)}
      >
        <ReRequestConfirmation
          onClose={setRerequestModalOpen}
          clearExistingErrors={resetMutation}
          setAlert={setNewConfirmationRequested}
        />
      </Modal>
    </>
  )
}

export { FormUserConfirm as default, FormUserConfirm }
