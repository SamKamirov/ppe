enum AppRoutes {
  Root = "/",
  Handbook = "handbook",
  Periods = "periods",
  Using = "using",
  Ranges = "ranges",
  Sizes = "sizes",
  Give = "give",
  SetRules = "tools/set-rules",
  Reports = "reports",
  Everything = "*",
  RuleCheck = "reports/norm-check",
  PersonCard = "tools/person-card",
  Login = "login",
  Profile = 'profile',
  Employee = 'employee',
  Info = 'info'
}

export const SliceNames = {
  AppData: 'AppData',
  UserProcess: 'UserProcess',
  ReportData: 'ReportData',
  ServiceData: 'ServiceData'
} as const;

export enum SortTypes {
  DEFAULT = 'DEFAULT',
  ID = 'ID',
  Alphabet = 'Alphabet'
}

export enum AuthorizationStatus {
  AUTH = "AUTH",
  NO_AUTH = "NO_AUTH"
}

export { AppRoutes };
