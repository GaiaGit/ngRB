export const FIELDS = {
  name: {
      sorter: { field: "name", sortBy: "name", reverse: false },
      header: "REEL NAME / DESC.",
      icon: "reel-alt",
      text: { type: "line", noValue: "--", value: "" }
  },
  emailName: {
      sorter: { field: "emailName", sortBy: "reel.name", reverse: false },
      header: "REEL NAME / DESC.",
      icon: "reel-alt",
      text: { type: "line", noValue: "--", value: "" }
  },
  viewedLastDate: {
      sorter: { field: "viewedLastDate", sortBy: "viewedLastDate", reverse: false },
      header: "VIEWED LAST",
      icon: "progress-clock",
      text: { type: "date", noValue: "--", value: "" }
  },
  modifiedDate: {
      sorter: { field: "modifiedDate", sortBy: "modifiedDate", reverse: true },
      header: "MODIFIED",
      icon: "calendar-clock",
      text: { type: "date", noValue: "--", value: "" }
  },
  creator: {
      sorter: { field: "creator", sortBy: "creator.userName", reverse: false },
      header: "CREATOR",
      icon: "account",
      text: { type: "username", noValue: "--", value: "" }
  },
  length: {
      sorter: { field: "length", sortBy: ["duration", "tracksTotal"], reverse: true },
      header: "LENGTH",
      icon: "timer",
      text: { type: "array", noValue: ["No length", "0 Tracks"], value: ["", "Tracks"] }
  },
  createdDate: {
      sorter: { field: "createdDate", sortBy: "createdDate", reverse: true },
      header: "CREATED",
      icon: "date-created-alt",
      text: { type: "date", noValue: "--", value: "" }
  },
  views: {
      sorter: { field: "views", sortBy: ["viewsTotal", "viewersTotal"], reverse: false },
      header: "VIEWS",
      icon: "ondemand-video",
      text: { type: "array", noValue: ["No views", "No viewers"], value: ["Total", "Viewers"] }
  },
  shared: {
      sorter: { field: "shared", sortBy: ["sharedTotal", "editorsTotal"], reverse: false },
      header: "SHARED",
      icon: "share-variant",
      text: { type: "array", noValue: ["Not shared", "No editors"], value: ["Users", "Editors"] }
  },
  sentDate: {
      sorter: { field: "sentDate", sortBy: "sentDate", reverse: true },
      header: "SENT",
      icon: "email-outline",
      text: { type: "date", noValue: "--", value: "" }
  },
  expiresDate: {
      sorter: { field: "expiresDate", sortBy: "expiresDate", reverse: false },
      header: "EXPIRES",
      icon: "calendar-remove",
      text: { type: "date", noValue: "Never expires", value: "" }
  },
  toAddresses: {
      sorter: { field: "toAddresses", sortBy: "toAddresses", reverse: false },
      header: "SENT TO",
      icon: "send",
      text: { type: "list", noValue: "--", value: "" }
  },
  subject: {
      sorter: { field: "subject", sortBy: "subject", reverse: false },
      header: "SUBJECT",
      icon: "description",
      text: { type: "line", noValue: "--", value: "" }
  }
}

export const columnFields = {
  my: [ FIELDS.modifiedDate, FIELDS.length, FIELDS.views, FIELDS.shared, FIELDS.createdDate, FIELDS.viewedLastDate ],
  shared: [ FIELDS.creator, FIELDS.modifiedDate, FIELDS.length, FIELDS.views, FIELDS.shared, FIELDS.createdDate ],
  links: [ FIELDS.sentDate, FIELDS.expiresDate, FIELDS.toAddresses, FIELDS.subject ]
};

export const SCREENSIZE = [
  '(min-width:480px)',
  '(min-width:640px)',
  '(min-width:800px)',
  '(min-width:1024px)',
  '(min-width:1280px)',
  '(min-width:1440px)'
];
