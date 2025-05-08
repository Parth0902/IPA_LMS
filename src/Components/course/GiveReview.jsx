import { TextField, Button, Box, Typography, Rating } from '@mui/material';
import { useState } from 'react';
import { useApi } from '../../hooks/useApi';

const GiveReview = ({ courseId, token }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const apiService = useApi();

  const handleSubmit = () => {

    console.log('courseId:', courseId, 'type:', typeof courseId);

    apiService({
      method: 'POST',
      endpoint: '/addReview',
      data: {
        courseId,
        rating,
        comment,
      },
      token,
    });
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
        <Typography variant="h6">Give Your Review</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
        <TextField
          label="Comment"
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  )
}

export default GiveReview;
