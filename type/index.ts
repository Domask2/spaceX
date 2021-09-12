export interface ISpacesDocs {
  docs: ISpaces;
  totalDocs?: number;
}

export interface ISpaces {
  data_local: Date;
  date_utc: string;
  details: string;
  id: string;
  links: links;
  name: string;
  success: boolean;
};
interface links {
  patch: small;
};
interface small  {
  small: string;
};

export interface PropsLayout {
  spaces: [ISpaces] | null;
  startDateSearch: Date;
  endDateSearch: Date;
  setEndDateSearch: any;
  setStartDateSearch: any;
  handleDataSeach: (e: any) => void;
  resetSeactDate: (e: any) => void;
};

export interface PropsSpaces {
  spaces: [ISpaces] | null;
};

export interface PropsDataPicker {
  startDateSearch: Date;
  endDateSearch: Date;
  setEndDateSearch: any;
  setStartDateSearch: any;
  handleDataSeach: (e: any) => void;
  resetSeactDate: (e: any) => void;
};
