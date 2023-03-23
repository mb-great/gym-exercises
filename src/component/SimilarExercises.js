import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercise}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3'>Exercises that target same muscle group</Typography>
      <Stack>
        {targetMuscleExercises.length ? <HorizontalScrollBar data= {targetMuscleExercises}/> : <Loader/>} 
      </Stack>
    </Box>
  )
}

export default SimilarExercises