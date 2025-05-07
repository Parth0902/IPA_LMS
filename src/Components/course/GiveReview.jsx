import { TextField, Button, Box, Typography, Rating } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {useApi} from '../../hooks/useApi';

const GiveReview = (courseId, token) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const apiService = useApi();

  const mutation = useMutation(async () => {
    const response = await apiService({
      method: 'POST',
      endpoint: '/addReview',
      token,
      data: { courseId, rating, comment },
    });
    return response;
  });

  const handleSubmit = () => {
    mutation.mutate(null, {
      onSuccess: (data) => {
        console.log('Review submitted successfully:', data);
      },
      onError: () => {
        console.error('Error submitting review');
      },
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
