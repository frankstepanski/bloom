import {
  Listing,
  ListingAvailability,
  ListingReviewOrder,
  ListingStatus,
  Unit,
} from "@bloom-housing/backend-core"

export const user = {
  agreedToTermsOfService: false,
  confirmedAt: new Date(),
  createdAt: new Date("2022-09-04T17:13:31.513Z"),
  dob: new Date(),
  email: "first.last@bloom.com",
  failedLoginAttemptsCount: 0,
  firstName: "First",
  hitConfirmationURL: null,
  id: "user_1",
  jurisdictions: [
    { id: "e50e64bc-4bc8-4cef-a4d1-1812add9981b" },
    { id: "d6b652a0-9947-418a-b69b-cd72028ed913" },
  ],
  language: null,
  lastLoginAt: new Date(),
  lastName: "Last",
  leasingAgentInListings: [],
  mfaEnabled: true,
  middleName: "Middle",
  passwordUpdatedAt: new Date(),
  passwordValidForDays: 180,
  phoneNumber: null,
  phoneNumberVerified: false,
  roles: { user: { id: "user_1" }, isAdmin: true, isJurisdictionalAdmin: false, isPartner: false },
  updatedAt: new Date(),
}

export const unit: Unit = {
  id: "sQ19KuyILEo0uuNqti2fl",
  amiPercentage: "45.0",
  annualIncomeMin: "26496.0",
  monthlyIncomeMin: "2208.0",
  floor: 2,
  annualIncomeMax: "46125.0",
  maxOccupancy: 2,
  minOccupancy: 1,
  monthlyRent: "1104.0",
  numBathrooms: null,
  numBedrooms: null,
  number: null,
  priorityType: null,
  sqFeet: "285",

  unitType: {
    id: "random_id_35edf",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "studio",
    numBedrooms: 0,
  },
  createdAt: new Date("2019-07-09T21:20:05.783Z"),
  updatedAt: new Date("2019-08-14T23:05:43.913Z"),
  monthlyRentAsPercentOfIncome: null,
}

export const listing: Listing = {
  id: "Uvbk5qurpB2WI9V6WnNdH",
  listingAvailability: ListingAvailability.openWaitlist,
  applicationConfig: undefined,
  applicationOpenDate: new Date("2019-12-31T15:22:57.000-07:00"),
  applicationPickUpAddress: undefined,
  applicationPickUpAddressOfficeHours: "",
  applicationDropOffAddress: null,
  applicationDropOffAddressOfficeHours: null,
  applicationMailingAddress: null,
  countyCode: "San Jose",
  jurisdiction: {
    id: "id",
    name: "San Jose",
    publicUrl: "",
  },
  depositMax: "",
  disableUnitsAccordion: false,
  events: [],
  showWaitlist: false,
  reviewOrderType: ListingReviewOrder.firstComeFirstServe,
  urlSlug: "listing-slug-abcdef",
  whatToExpect: "Applicant will be contacted. All info will be verified. Be prepared if chosen.",
  status: ListingStatus.active,
  postmarkedApplicationsReceivedByDate: new Date("2019-12-05"),
  applicationDueDate: new Date("2019-12-31T15:22:57.000-07:00"),
  applicationMethods: [],
  applicationOrganization: "98 Archer Street",
  assets: [
    {
      label: "building",
      fileId:
        "https://regional-dahlia-staging.s3-us-west-1.amazonaws.com/listings/archer/archer-studios.jpg",
    },
  ],
  buildingSelectionCriteria:
    "Tenant Selection Criteria will be available to all applicants upon request.",
  costsNotIncluded:
    "Resident responsible for PG&E, internet and phone.  Owner pays for water, trash, and sewage.  Residents encouraged to obtain renter's insurance but this is not a requirement.  Rent is due by the 5th of each month. Late fee $35 and returned check fee is $35 additional.",
  creditHistory:
    "Applications will be rated on a score system for housing. An applicant's score may be impacted by negative tenant peformance information provided to the credit reporting agency.  All applicants are expected have a passing acore of 70 points out of 100 to be considered for housing.  Applicants with no credit history will receive a maximum of 80 points to fairly outweigh positive and/or negative trades as would an applicant with established credit history. Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process. ",
  depositMin: "1140.0",
  programRules:
    "Applicants must adhere to minimum & maximum income limits. Tenant Selection Criteria applies.",
  waitlistMaxSize: 300,
  name: "Archer Studios",
  waitlistCurrentSize: 300,
  waitlistOpenSpots: 0,
  isWaitlistOpen: true,
  displayWaitlistSize: false,
  requiredDocuments: "Completed application and government issued IDs",
  createdAt: new Date("2019-07-08T15:37:19.565-07:00"),
  updatedAt: new Date("2019-07-09T14:35:11.142-07:00"),
  applicationFee: "30.0",
  criminalBackground:
    "A criminal background investigation will be obtained on each applicant.  As criminal background checks are done county by county and will be ran for all counties in which the applicant lived,  Applicants will be disqualified for tenancy if they have been convicted of a felony or misdemeanor.  Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process. ",
  leasingAgentAddress: {
    id: "id",
    createdAt: new Date(),
    updatedAt: new Date(),
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  leasingAgentEmail: "mbaca@charitieshousing.org",
  leasingAgentName: "Marisela Baca",
  leasingAgentOfficeHours: "Monday, Tuesday & Friday, 9:00AM - 5:00PM",
  leasingAgentPhone: "(408) 217-8562",
  leasingAgentTitle: "",
  listingMultiselectQuestions: [],
  rentalAssistance: "Custom rental assistance",
  rentalHistory:
    "Two years of rental history will be verified with all applicable landlords.  Household family members and/or personal friends are not acceptable landlord references.  Two professional character references may be used in lieu of rental history for applicants with no prior rental history.  An unlawful detainer report will be processed thourhg the U.D. Registry, Inc. Applicants will be disqualified if they have any evictions filing within the last 7 years.  Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process.",
  householdSizeMin: 2,
  householdSizeMax: 3,
  smokingPolicy: "Non-smoking building",
  unitsAvailable: 0,
  unitsSummary: [],
  unitsSummarized: undefined,
  unitAmenities: "Dishwasher",
  developer: "Charities Housing ",
  yearBuilt: 2012,
  accessibility:
    "There is a total of 5 ADA units in the complex, all others are adaptable. Exterior Wheelchair ramp (front entry)",
  amenities:
    "Community Room, Laundry Room, Assigned Parking, Bike Storage, Roof Top Garden, Part-time Resident Service Coordinator",
  buildingTotalUnits: 35,
  buildingAddress: {
    id: "buildingId",
    createdAt: new Date(),
    updatedAt: new Date(),
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  neighborhood: "Rosemary Gardens Park",
  petPolicy:
    "No pets allowed. Accommodation animals may be granted to persons with disabilities via a reasonable accommodation request.",
  units: [
    unit,
    {
      id: "Cq870hwYXcPxCYT4_uW_3",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 3,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      numBathrooms: null,
      numBedrooms: null,
      number: null,
      priorityType: null,
      sqFeet: "285",

      unitType: {
        id: "random_id_35edf",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "studio",
        numBedrooms: 0,
      },
      createdAt: new Date("2019-08-14T22:53:09.982Z"),
      updatedAt: new Date("2019-08-14T23:06:59.015Z"),
      monthlyRentAsPercentOfIncome: null,
    },
    {
      id: "9XQrfuAPOn8wtD7HlhCTR",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      numBathrooms: null,
      numBedrooms: null,
      number: null,
      priorityType: null,
      sqFeet: "285",

      unitType: {
        id: "random_id_35edf",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "studio",
        numBedrooms: 0,
      },
      createdAt: new Date("2019-08-14T22:52:08.758Z"),
      updatedAt: new Date("2019-08-14T23:06:59.023Z"),
      monthlyRentAsPercentOfIncome: null,
    },
    {
      id: "bamrJpZA9JmnLSMEbTlI4",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      numBathrooms: null,
      numBedrooms: null,
      number: null,
      priorityType: null,
      sqFeet: "285",

      unitType: {
        id: "random_id_35edf",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "studio",
        numBedrooms: 0,
      },
      createdAt: new Date("2019-08-14T22:52:08.766Z"),
      updatedAt: new Date("2019-08-14T23:06:59.031Z"),
      monthlyRentAsPercentOfIncome: null,
    },
    {
      id: "BCwOFAHJDpyPbKcVBjIUM",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      numBathrooms: null,
      numBedrooms: null,
      number: null,
      priorityType: null,
      sqFeet: "285",

      unitType: {
        id: "random_id_35edf",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "studio",
        numBedrooms: 0,
      },
      createdAt: new Date("2019-08-14T22:52:08.771Z"),
      updatedAt: new Date("2019-08-14T23:06:59.039Z"),
      // amiChart: SanMateoHUD2019,
      monthlyRentAsPercentOfIncome: null,
    },
    {
      id: "5t56gXJdJLZiksBuX8BtL",
      amiPercentage: "45.0",
      annualIncomeMin: "26496.0",
      monthlyIncomeMin: "2208.0",
      floor: 2,
      annualIncomeMax: "46125.0",
      maxOccupancy: 2,
      minOccupancy: 1,
      monthlyRent: "1104.0",
      numBathrooms: null,
      numBedrooms: null,
      number: null,
      priorityType: null,
      sqFeet: "285",

      unitType: {
        id: "random_id_35edf",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "studio",
        numBedrooms: 0,
      },
      createdAt: new Date("2019-08-14T22:52:08.777Z"),
      updatedAt: new Date("2019-08-14T23:06:59.046Z"),
      monthlyRentAsPercentOfIncome: null,
    },
  ],
}