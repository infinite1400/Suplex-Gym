import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utlis/fetchData';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import Loader from './Loader';
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises?limit=${1400}`, exerciseOptions);
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=${1400}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart])
  if (!exercises.length) return <Loader />
  console.log(exercises);
  console.log(bodyPart);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = async (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }
  console.log(bodyPart === 'all');
  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt={'50px'}
      p={'20px'}
    >
      <Typography variant="h3" mb='46px' >
        Showing results
      </Typography>
      <Stack
        direction={'row'}
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap={'wrap'}
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {
          exercises.length > 9 && (
            <Pagination
              color='primary'
              shape='rounded'
              varient='outlined'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises
