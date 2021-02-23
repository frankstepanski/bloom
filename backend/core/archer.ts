import {
  AmiChartCreate,
  ApplicationMethodType,
  CSVFormattingType,
  Listing,
  ListingStatus,
} from "./types"

export const SanMateoHUD2019: AmiChartCreate = {
  name: "SanMateoHUD2019",
  items: [
    {
      percentOfAmi: 120,
      householdSize: 1,
      income: 114900,
    },
    {
      percentOfAmi: 120,
      householdSize: 2,
      income: 131300,
    },
    {
      percentOfAmi: 120,
      householdSize: 3,
      income: 147750,
    },
    {
      percentOfAmi: 120,
      householdSize: 4,
      income: 164150,
    },
    {
      percentOfAmi: 120,
      householdSize: 5,
      income: 177300,
    },
    {
      percentOfAmi: 100,
      householdSize: 1,
      income: 95750,
    },
    {
      percentOfAmi: 100,
      householdSize: 2,
      income: 109450,
    },
    {
      percentOfAmi: 100,
      householdSize: 3,
      income: 123100,
    },
    {
      percentOfAmi: 100,
      householdSize: 4,
      income: 136800,
    },
    {
      percentOfAmi: 100,
      householdSize: 5,
      income: 147750,
    },
    {
      percentOfAmi: 100,
      householdSize: 6,
      income: 158700,
    },
    {
      percentOfAmi: 100,
      householdSize: 7,
      income: 169650,
    },
    {
      percentOfAmi: 100,
      householdSize: 8,
      income: 180600,
    },
    {
      percentOfAmi: 80,
      householdSize: 1,
      income: 90450,
    },
    {
      percentOfAmi: 80,
      householdSize: 2,
      income: 103350,
    },
    {
      percentOfAmi: 80,
      householdSize: 3,
      income: 116250,
    },
    {
      percentOfAmi: 80,
      householdSize: 4,
      income: 129150,
    },
    {
      percentOfAmi: 80,
      householdSize: 5,
      income: 139500,
    },
    {
      percentOfAmi: 80,
      householdSize: 6,
      income: 149850,
    },
    {
      percentOfAmi: 80,
      householdSize: 7,
      income: 160150,
    },
    {
      percentOfAmi: 80,
      householdSize: 8,
      income: 170500,
    },
    {
      percentOfAmi: 60,
      householdSize: 1,
      income: 71170,
    },
    {
      percentOfAmi: 60,
      householdSize: 2,
      income: 81340,
    },
    {
      percentOfAmi: 60,
      householdSize: 3,
      income: 91502,
    },
    {
      percentOfAmi: 60,
      householdSize: 4,
      income: 101629,
    },
    {
      percentOfAmi: 60,
      householdSize: 5,
      income: 109833,
    },
    {
      percentOfAmi: 60,
      householdSize: 6,
      income: 117924,
    },
    {
      percentOfAmi: 60,
      householdSize: 7,
      income: 126059,
    },
    {
      percentOfAmi: 60,
      householdSize: 8,
      income: 134219,
    },
    {
      percentOfAmi: 50,
      householdSize: 1,
      income: 56450,
    },
    {
      percentOfAmi: 50,
      householdSize: 2,
      income: 64500,
    },
    {
      percentOfAmi: 50,
      householdSize: 3,
      income: 72550,
    },
    {
      percentOfAmi: 50,
      householdSize: 4,
      income: 80600,
    },
    {
      percentOfAmi: 50,
      householdSize: 5,
      income: 87050,
    },
    {
      percentOfAmi: 50,
      householdSize: 6,
      income: 93500,
    },
    {
      percentOfAmi: 50,
      householdSize: 7,
      income: 99950,
    },
    {
      percentOfAmi: 50,
      householdSize: 8,
      income: 106400,
    },
    {
      percentOfAmi: 30,
      householdSize: 1,
      income: 33850,
    },
    {
      percentOfAmi: 30,
      householdSize: 2,
      income: 38700,
    },
    {
      percentOfAmi: 30,
      householdSize: 3,
      income: 43550,
    },
    {
      percentOfAmi: 30,
      householdSize: 4,
      income: 48350,
    },
    {
      percentOfAmi: 30,
      householdSize: 5,
      income: 52250,
    },
    {
      percentOfAmi: 30,
      householdSize: 6,
      income: 56100,
    },
    {
      percentOfAmi: 30,
      householdSize: 7,
      income: 60000,
    },
    {
      percentOfAmi: 30,
      householdSize: 8,
      income: 63850,
    },
  ],
}

export const ArcherListing: Listing = {
  id: "Uvbk5qurpB2WI9V6WnNdH",
  applicationConfig: undefined,
  applicationOpenDate: new Date("2019-12-31T15:22:57.000-07:00"),
  applicationPickUpAddress: undefined,
  applicationPickUpAddressOfficeHours: "",
  depositMax: "",
  disableUnitsAccordion: false,
  events: [],
  urlSlug: "listing-slug-abcdef",
  whatToExpect: {
    applicantsWillBeContacted: "Applicant will be contacted.",
    allInfoWillBeVerified: "All info will be verified.",
    bePreparedIfChosen: "Be prepared if chosen.",
  },
  status: ListingStatus.active,
  postmarkedApplicationsReceivedByDate: new Date("2019-12-05"),
  applicationAddress: {
    city: "San Jose",
    street: "98 Archer Street",
    zipCode: "95112",
    state: "CA",
    latitude: 37.36537,
    longitude: -121.91071,
  },
  applicationDueDate: new Date("2019-12-31T15:22:57.000-07:00"),
  applicationMethods: [
    {
      type: ApplicationMethodType.POBox,
      acceptsPostmarkedApplications: true,
      label: "",
      externalReference: "",
    },
    {
      type: ApplicationMethodType.LeasingAgent,
      acceptsPostmarkedApplications: true,
      label: "",
      externalReference: "",
    },
    {
      type: ApplicationMethodType.PaperPickup,
      acceptsPostmarkedApplications: true,
      label: "",
      externalReference: "",
    },
  ],
  applicationOrganization: "98 Archer Street",
  // TODO confirm not used anywhere
  // applicationPhone: "(408) 217-8562",
  assets: [
    {
      // TODO confirm not used anywhere
      // referenceType: "Listing",
      // TODO confirm not used anywhere
      // referenceId: "Uvbk5qurpB2WI9V6WnNdH",
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
  // TODO confirm not used anywhere
  // externalId: null,
  waitlistMaxSize: 300,
  name: "Archer Studios",
  waitlistCurrentSize: 300,
  // Addng displayWaitListSize for #707
  displayWaitlistSize: false,
  // TODO confirm not used anywhere
  // prioritiesDescriptor: null,
  requiredDocuments: "Completed application and government issued IDs",
  // TODO confirm not used anywhere
  // reservedCommunityMaximumAge: null,
  // TODO confirm not used anywhere
  // reservedCommunityMinimumAge: null,
  // TODO confirm not used anywhere
  // reservedDescriptor: null,
  createdAt: new Date("2019-07-08T15:37:19.565-07:00"),
  updatedAt: new Date("2019-07-09T14:35:11.142-07:00"),
  // TODO confirm not used anywhere
  // groupId: 1,
  // TODO confirm not used anywhere
  // hideUnitFeatures: false,
  applicationFee: "30.0",
  criminalBackground:
    "A criminal background investigation will be obtained on each applicant.  As criminal background checks are done county by county and will be ran for all counties in which the applicant lived,  Applicants will be disqualified for tenancy if they have been convicted of a felony or misdemeanor.  Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process. ",
  CSVFormattingType: CSVFormattingType.basic,
  leasingAgentAddress: {
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
  rentalAssistance: "Custom rental assistance",
  rentalHistory:
    "Two years of rental history will be verified with all applicable landlords.  Household family members and/or personal friends are not acceptable landlord references.  Two professional character references may be used in lieu of rental history for applicants with no prior rental history.  An unlawful detainer report will be processed thourhg the U.D. Registry, Inc. Applicants will be disqualified if they have any evictions filing within the last 7 years.  Refer to Tenant Selection Criteria or Qualification Criteria for details related to the qualification process.",
  preferences: [],
  property: {
    id: "iqweflajsdkfhu",
    createdAt: new Date(),
    updatedAt: new Date(),
    householdSizeMin: 2,
    householdSizeMax: 3,
    smokingPolicy: "Non-smoking building",
    unitsAvailable: 0,
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
      {
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-07-09T21:20:05.783Z"),
        updatedAt: new Date("2019-08-14T23:05:43.913Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.982Z"),
        updatedAt: new Date("2019-08-14T23:06:59.015Z"),
        amiChart: SanMateoHUD2019,
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.758Z"),
        updatedAt: new Date("2019-08-14T23:06:59.023Z"),
        amiChart: SanMateoHUD2019,
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.766Z"),
        updatedAt: new Date("2019-08-14T23:06:59.031Z"),
        amiChart: SanMateoHUD2019,
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.771Z"),
        updatedAt: new Date("2019-08-14T23:06:59.039Z"),
        amiChart: SanMateoHUD2019,
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.777Z"),
        updatedAt: new Date("2019-08-14T23:06:59.046Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "7mmAuJ0x7l_2VxJLoSzX5",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.783Z"),
        updatedAt: new Date("2019-08-14T23:06:59.053Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "LVsJ-_PYy8x2rn5V8Deo9",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.976Z"),
        updatedAt: new Date("2019-08-14T23:06:59.161Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "neDXHUzJkL2YZ2CQOZx1i",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.976Z"),
        updatedAt: new Date("2019-08-14T23:06:59.167Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "3_cr3dd76rGY7tDYlvfEO",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-07-09T21:24:14.122Z"),
        updatedAt: new Date("2019-08-14T23:06:59.173Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "_38QsH2XMgHEzn_Sn4b2r",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.950Z"),
        updatedAt: new Date("2019-08-14T23:06:59.179Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "gTHXtJ37uP8R8zkOp7wOt",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.956Z"),
        updatedAt: new Date("2019-08-14T23:06:59.186Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "me-MRbUEn6ox-OYpzosO1",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.961Z"),
        updatedAt: new Date("2019-08-14T23:06:59.192Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "ZOtuFSb79LX7p6CVW3H4w",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.967Z"),
        updatedAt: new Date("2019-08-14T23:06:59.198Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "nISGOCiWoCzQXkMZGV5bV",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.972Z"),
        updatedAt: new Date("2019-08-14T23:06:59.204Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "Ppne-7ChrEht1HxwfO0gc",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.978Z"),
        updatedAt: new Date("2019-08-14T23:06:59.210Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "78hBgnEoHw3aW5r4Mn2Jf",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 2,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:55:22.984Z"),
        updatedAt: new Date("2019-08-14T23:06:59.216Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "0RtHf-Iogw3x643r46y-a",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.563Z"),
        updatedAt: new Date("2019-08-14T23:06:59.222Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "ENMVc3sX0kmD3G4762naM",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.570Z"),
        updatedAt: new Date("2019-08-14T23:06:59.229Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "O9OSAiIFTSA5SimFlCbd7",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.575Z"),
        updatedAt: new Date("2019-08-14T23:06:59.235Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "d_7SUFpxe1rZZ5dIgMgTG",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.580Z"),
        updatedAt: new Date("2019-08-14T23:06:59.241Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "bR17hir7729c22LyVbQ3m",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.587Z"),
        updatedAt: new Date("2019-08-14T23:06:59.247Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "B62kKSz7qwAA7aM6tzwtB",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.593Z"),
        updatedAt: new Date("2019-08-14T23:06:59.254Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "C3YePWy05Or9fDeVuRPTF",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.606Z"),
        updatedAt: new Date("2019-08-14T23:06:59.260Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "Logk3eY0iXtf3oCOctxqT",
        amiPercentage: "30.0",
        annualIncomeMin: "17256.0",
        monthlyIncomeMin: "1438.0",
        floor: 3,
        annualIncomeMax: "30750.0",
        maxOccupancy: 2,
        minOccupancy: 1,
        monthlyRent: "719.0",
        numBathrooms: null,
        numBedrooms: null,
        number: null,
        priorityType: null,
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:56:06.612Z"),
        updatedAt: new Date("2019-08-14T23:06:59.267Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "nIYojGurvtF7xelaeT0tN",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.790Z"),
        updatedAt: new Date("2019-08-14T23:06:59.060Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "omzU7rRoirKXq8SQfaShf",
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
        reservedType: "senior",
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.796Z"),
        updatedAt: new Date("2019-08-14T23:06:59.067Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "IzVtblU-KMTHf3wPGzx2g",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.802Z"),
        updatedAt: new Date("2019-08-14T23:06:59.074Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "7g-6eFE_Q6Xi5K2xT2bE5",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.807Z"),
        updatedAt: new Date("2019-08-14T23:06:59.080Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "4Br-28LII41R3pINIzLwe",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.813Z"),
        updatedAt: new Date("2019-08-14T23:06:59.086Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "5bvjTW2ATEpxwsKppCh0l",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:52:08.819Z"),
        updatedAt: new Date("2019-08-14T23:06:59.093Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "BZlMmnCXwT4bChrcaNUW3",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.921Z"),
        updatedAt: new Date("2019-08-14T23:06:59.099Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "j2hU6Qv5ayOHMKPLQBolz",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.927Z"),
        updatedAt: new Date("2019-08-14T23:06:59.105Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "w2-TtBySVELMWyL1cLTkA",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.933Z"),
        updatedAt: new Date("2019-08-14T23:06:59.111Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "YhC6LoOIT6hxPfk4uKU3m",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.938Z"),
        updatedAt: new Date("2019-08-14T23:06:59.118Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "5CuSFqgGgFX245JQsnG84",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.944Z"),
        updatedAt: new Date("2019-08-14T23:06:59.124Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "WoD20A8q1CZm8NmGvLHUn",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.950Z"),
        updatedAt: new Date("2019-08-14T23:06:59.130Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "srzDhzV5HQpqR5vuyHKlQ",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.955Z"),
        updatedAt: new Date("2019-08-14T23:06:59.136Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "b9jo7kYEOQcATHWBjwJ6r",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.960Z"),
        updatedAt: new Date("2019-08-14T23:06:59.142Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "i5tQbXCZRrU_X3ultDSii",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.965Z"),
        updatedAt: new Date("2019-08-14T23:06:59.148Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
      {
        id: "mrRtN0rArISKnE-PFomth",
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
        reservedType: null,
        sqFeet: "285",
        status: "occupied",
        unitType: "studio",
        createdAt: new Date("2019-08-14T22:53:09.970Z"),
        updatedAt: new Date("2019-08-14T23:06:59.155Z"),
        amiChart: SanMateoHUD2019,
        monthlyRentAsPercentOfIncome: null,
      },
    ],
  },
  // TODO confirm not used anywhere
  // totalUnits: 2,
}
