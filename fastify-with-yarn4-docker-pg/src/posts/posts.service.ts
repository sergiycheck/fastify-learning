import { CreatePostDto, Post } from './dto/post.dto';

interface PostsModel {
  create(post: CreatePostDto): Post;
}

const posts: PostsModel = {
  create(post: CreatePostDto) {
    return new Post(post);
  },
};

export class PostsService {
  private postModel: PostsModel;
  constructor() {
    this.postModel = posts;
  }

  create(post: CreatePostDto) {
    return this.postModel.create({ ...post });
  }

  read() {}

  update() {}

  delete() {}
}
