import { useState } from 'react';

// 1. Make a state called distances to save the distance of each node from the source node.
// 2. Set the distances to be infinite for every node except for the source node, which
// should be 0.
// 3. Create a list that will keep track of nodes and their distances, with the node having the
// shortest distance coming first.
// 4. Do the following steps to find the shortest path:
// ---> 4a Take out a node from the list.
// ---> 4b. For each neighbor of the taken out node, find the distance by adding the current
// node's distance and the weight of the edge between the current node and the
// neighbor.
// ---> 4c. If the new distance is less than the neighbor's current distance, update the
// neighbor's distance and add it to the list.
// ---> 4d. Keep doing steps 1-3 until the target node is taken out or the list is empty.
// 5. Save the calculated distances in the distances state.
// 6. Use the distances state to find the shortest path from the source node to the target
// node by following the path from the target node back to the source node.
// 7. Use the ^useMemo^ hook to remember the calculations done in the algorithm to make
// it faster.
