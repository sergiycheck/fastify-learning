export class CreatePostDto {
  public title: string;
}
export class Post {
  public id: string;
  public title: string;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
