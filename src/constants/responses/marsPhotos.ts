export interface ResponseMarsPhotos {
  photos: PhotosMars[];
}

export interface PhotosMars {
  id: number;
  sol: number;
  earth_date: string;
  img_src: string;
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  rover: {
    id: number;
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    status: string;
    total_photos: number;
    cameras: {
      full_name: string;
      name: string;
    }[];
  };
}
