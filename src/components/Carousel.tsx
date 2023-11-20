import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { CarouselProps, ItemProps } from '../types/props/CarouselProps';



// Individual item component in the carousel
const Item: React.FC<ItemProps> = ({ id, level,imageUrl }) => {
  // Generate a CSS class based on the item's level
  const className = `item level${level}`;
  return (
    <div >
     <img src={imageUrl} alt={"number"+ id } className={className} />
    </div>
  );
};


const Carousel: React.FC<CarouselProps> = ({ items, active }) => {
  // State to track the active item and the direction of movement
  const [state, setState] = useState({
    active,
    direction: '',
  });

  // Generate the items to be displayed in the carousel
  const generateItems = () => {
    const generatedItems: React.ReactNode[] = [];
    let level: number;

    // Loop through a range of items centered around the active item
    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;

      // Handle wrapping for items at the beginning and end of the array
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }

      // Calculate the level of each item for styling
      level = state.active - i;

      // Create an Item component for each item
      generatedItems.push(<Item key={index} id={items[index].id} level={level} imageUrl={items[index].imageUrl} />);
    }

    return generatedItems;
  };

  // Move the carousel to the left
  const moveLeft = () => {
    const newActive = state.active - 1;
    setState({
      active: newActive < 0 ? items.length - 1 : newActive,
      direction: 'left',
    });
  };

  // Move the carousel to the right
  const moveRight = () => {
    const newActive = (state.active + 1) % items.length;
    setState({
      active: newActive,
      direction: 'right',
    });
  };

  // Render the Carousel component
  return (
    <Box id="carousel" className="noselect">
        <Box sx={{ display: "flex", justifyContent:"space-between" }}>
        <Button className="arrow arrow-left" onClick={moveLeft}>
        <Typography variant="inherit" component="span">
          &lt;
        </Typography>
      </Button>
      <Button className="arrow arrow-left" onClick={moveRight}>
        <Typography variant="inherit" component="span">
          &gt;
        </Typography>
      </Button>
        </Box>
      
      <Box className="contaienr-item">
        {generateItems()}
      </Box>
     
    </Box>
  );
};

export default Carousel;
