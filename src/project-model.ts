namespace App {
  export enum ProjectStatus {
    Active,
    Finished,
  }
 export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public time: string,
      public status: ProjectStatus
    ) {}
  }
}