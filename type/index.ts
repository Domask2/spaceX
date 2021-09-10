export interface ISpacesDocs {
  docs: ISpaces;
  totalDocs?: number;
}

export type ISpaces = {
  data_local: Date;
  date_utc: string;
  details: string;
  id: string;
  links: links;
  name: string;
  success: boolean;
};
type links = {
  patch: small;
};
type small = {
  small: string;
};

export type PropsLayout = {
  spaces: [ISpaces] | null;
  startDateSearch: Date;
  endDateSearch: Date;
  setEndDateSearch: any;
  setStartDateSearch: any;
  handleDataSeach: (e: any) => void;
  resetSeactDate: (e: any) => void;
};

export type PropsSpaces = {
  spaces: [ISpaces] | null;
};

export type PropsDataPicker = {
  startDateSearch: Date;
  endDateSearch: Date;
  setEndDateSearch: any;
  setStartDateSearch: any;
  handleDataSeach: (e: any) => void;
  resetSeactDate: (e: any) => void;
};
