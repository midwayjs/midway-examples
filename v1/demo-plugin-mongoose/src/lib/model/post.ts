import { providerWrapper } from 'midway';
import { Schema, Model, model } from 'mongoose';
// Document


export const PostSchema = new Schema({
  id: Number,
  title: String,
  post_content: String,
  status: Number,
  created_at: Date,
  updated_at: Date,
});

export async function factory() {
  return MPostModel;
}

providerWrapper([
  {
    id: 'MPostModel',
    provider: factory,
  },
]);

const MPostModel: Model<any> = model('my_posts_table', PostSchema)

export type IMPostModel = typeof MPostModel;

