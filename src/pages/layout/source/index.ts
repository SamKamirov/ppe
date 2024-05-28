import { AppRoutes } from "../../../../const";

export const getIsProfile = (pathname: string) => pathname.slice(1, pathname.length) === AppRoutes.Profile.toString();