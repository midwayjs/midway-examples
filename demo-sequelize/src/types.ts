import { DataType, ModelAttributeColumnOptions } from 'sequelize';

type SequelizeAttribute = string | DataType | ModelAttributeColumnOptions;

export type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: SequelizeAttribute
};