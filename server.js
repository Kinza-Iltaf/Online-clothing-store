const express = require('express');
const app = express();
app.use(express.json());

let reviews = [];
let flags = [];

// Submit a review
app.post('/api/reviews', (req, res) => {
    const { product, rating, review, status } = req.body;
    const newReview = { id: reviews.length + 1, product, rating, review, status };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// Fetch reviews
app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

// Approve/Reject review
app.post('/api/review/:id/status', (req, res) => {
    const reviewId = parseInt(req.params.id);
    const { status } = req.body;
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.status = status;
        res.status(200).send('Review status updated.');
    } else {
        res.status(404).send('Review not found.');
    }
});

// Flag review
app.post('/api/review/:id/flag', (req, res) => {
    const reviewId = parseInt(req.params.id);
    const { reason } = req.body;
    flags.push({ review_id: reviewId, reason });
    res.status(200).send('Review flagged.');
});

app.listen(3000, () => console.log('Server running on port 3000'));
