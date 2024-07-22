const audiobooks = [];

for (let i = 1; i <= 20; i++) {
  audiobooks.push({
    title: `Audiobook Title ${i}`,
    author: `Author ${i}`,
    coverImage: `https://example.com/default_cover_image_${i}.jpg`,
    description: `Description for audiobook ${i}. This is a placeholder description for testing purposes.`,
    genre: `Genre ${i}`,
    reviews: [{
      description: `This is a review for audiobook ${i}.`,
      rating: Math.floor(Math.random() * 5) + 1 // Random rating between 1 and 5
    }]
  });
}

module.exports = audiobooks;
