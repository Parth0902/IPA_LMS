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
    <div className="flex flex-col gap-6 h-full">
      <Typography variant="h6" className="!text-lg !font-semibold">
        Give Your Review
      </Typography>

      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        sx={{ fontSize: '2.6rem', color: 'gold' }}
      />

      <TextField
        label="Comment"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          sx: {
            borderRadius: '0.5rem',
            height: '250px',
          },
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="!bg-black hover:!bg-gray-800 !text-white !rounded-md !py-2 !px-4"
      >
        Submit
      </Button>
    </div>
  );
};

GiveReview.propTypes = {
  courseId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default GiveReview;
