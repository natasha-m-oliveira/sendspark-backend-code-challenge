type CandidateProps = {
  id?: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle?: string | null;
  workEmail: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Candidate {
  private props: Required<CandidateProps>;

  constructor(props: CandidateProps) {
    const currentDate = new Date();

    this.props = {
      id: props.id ?? '',
      firstName: props.firstName,
      lastName: props.lastName,
      company: props.company,
      jobTitle: props.jobTitle || null,
      workEmail: props.workEmail,
      password: props.password,
      createdAt: props.createdAt ?? currentDate,
      updatedAt: currentDate,
    };
  }

  public get id() {
    return this.props.id;
  }

  public set id(id: string) {
    this.props.id = id;
  }

  public get firstName() {
    return this.props.firstName;
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  public get lastName() {
    return this.props.lastName;
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  public get company() {
    return this.props.company;
  }

  public set company(company: string) {
    this.props.company = company;
  }

  public get jobTitle() {
    return this.props.jobTitle;
  }

  public set jobTitle(jobTitle: string) {
    this.props.jobTitle = jobTitle;
  }

  public get workEmail() {
    return this.props.workEmail;
  }

  public set workEmail(workEmail: string) {
    this.props.workEmail = workEmail;
  }

  public get password() {
    return this.props.password;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
