export const createGrid = (width, height) => {
   const nodes = [];

   for (let col = 0; col < width; col++) {
      const currentColumn = [];
      for (let row = 0; row < height; row++) {
         const currentNode = {
            row,
            col,
            isOrigin: row === 2 && col === 2,
            isTarget: row === 8 && col === 8,
            isWall: false,
            weight: 1,
            distance: Infinity,
         };
         currentColumn.push(currentNode);
      }
      nodes.push(currentColumn);
   }
   return nodes;
};