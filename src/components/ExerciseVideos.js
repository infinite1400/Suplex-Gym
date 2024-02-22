import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos)
  // exerciseVideos.shift();
  // if(!exerciseVideos.length) return "Loading...."
  return (
    <Box
      sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'
    >
      <Typography variant='h3' mb='33px' >Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }} >{name}</span> exercise videos</Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos?.slice(0,3).map((item, index) => (
          <React.Fragment key={index}>
            {index === 0 ? ( // Check if it's the first item
              <div>
                <img style={{ borderTopLeftRadius: '20px' }} src={item.channel.thumbnails[0].url} alt={item.channel.title} />
                {console.log(JSON.stringify(item))}
                {console.log(item.channel.channelId)}
                {console.log(item.channel.title)}
                {console.log(item.channel.thumbnails[1].url)}

                <Box>
                  <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                    {item.channel.title}
                  </Typography>
                  <Typography fontSize="14px" color="#000">
                    {item.channel.channelId}
                  </Typography>
                </Box>
              </div>
            ) : (
              ''
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
