export interface CarouselProps {
    items: ImageItem[]; 
    active: number; 
  }

export interface ImageItem {
    id: number;
    imageUrl: string;
  }
  
  export interface ItemProps {
    id: number;
    level: number;
    imageUrl: string;
  } 

  