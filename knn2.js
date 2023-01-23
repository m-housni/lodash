// return the k nearest neighbors of a point in a dataset


function k_neighbors(dataset, k, point) {
  // get the number of rows in the dataset
  let len = dataset.length;
  // create an array of distances
  let distances = [];
  // create an array of indices
  let indices = [];
  // create an array of k distances
  let k_distances = [];
  // create an array of k indices
  let k_indices = [];
  // create an array of k nearest neighbors
  let k_neighbors = [];

  // calculate the distance between the point and each row of the dataset
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < point.length; j++) {
      sum += Math.pow(dataset[i][j] - point[j], 2);
    }
    distances[i] = Math.sqrt(sum);
    indices[i] = i;
  }

  // sort the distances and corresponding indices from smallest to largest
  // by the distances
  for (let i = 0; i < len; i++) {
    let min = distances[i];
    let min_index = i;
    for (let j = i + 1; j < len; j++) {
      if (distances[j] < min) {
        min = distances[j];
        min_index = j;
      }
    }
    if (min_index !== i) {
      let temp = distances[i];
      distances[i] = distances[min_index];
      distances[min_index] = temp;
      temp = indices[i];
      indices[i] = indices[min_index];
      indices[min_index] = temp;
    }
  }

  // get the first k distances and indices
  for (let i = 0; i < k; i++) {
    k_distances[i] = distances[i];
    k_indices[i] = indices[i];
  }

  // get the k nearest neighbors using the k indices
  for (let i = 0; i < k; i++) {
    k_neighbors[i] = dataset[k_indices[i]];
  }

  return k_neighbors;
}

export default k_neighbors;