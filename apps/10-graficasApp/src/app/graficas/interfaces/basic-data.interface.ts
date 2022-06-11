import { DatasetInterface } from "./dataset.interface";
import { MultiDatasetInterface } from "./multi-dataset.interface";

export interface BasicDataInterface {
    labels: string[];
    datasets: DatasetInterface[] | MultiDatasetInterface[];
}