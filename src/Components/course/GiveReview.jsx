import { TextField, Button, Typography, Rating } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useApi } from '../../hooks/useApi';

const GiveReview = ({ courseId, token }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const apiService = useApi();

  const handleSubmit = () => {
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
      <div className='flex flex-col gap-2'>
        <Typography variant="h6">Give Your Review</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          sx={{ fontSize: '2rem', color: 'gold' }}
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
      </div>
    </div>
  )
}

GiveReview.propTypes = {
  courseId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default GiveReview;
