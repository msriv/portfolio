export interface UpdateInterface {
  id: Number;
  title: String;
  dateCreated: String;
  link: String;
}

export interface ProjectInterface {
  id: Number;
  slug: String;
  brief: String;
  title: String;
  tags: String[];
  tools?: String[];
  link: String;
}

export interface ToolInterface {
  name: String;
  icon: String;
}

export interface PublicationInterface {
  id: Number;
  title: String;
  conference: String;
  conferenceLink: String;
  paperLink: String;
  downloadLink: String;
  datePublished: String;
}
