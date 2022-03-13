import React from 'react';
import Typography from '@material-ui/core/Typography';
import AbrahamAvatarCard from '../AbrahamAvatarCard';

const Introduction = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Hello there!
      </Typography>
      <AbrahamAvatarCard>
        Nice to meet you. I&apos;m Abraham Samma, the developer of Oneplaybook. Feel free to reach
        out to me if you have any questions. Great to have you!
      </AbrahamAvatarCard>
      <Typography variant="inherit">
        Welcome to Oneplaybook. Thanks for taking the time to poke around here! Oneplaybook is still
        at a stage where it is being perfected through a dedicated community of testers.
        <br />
        <br />
        Currently, the waiting list is not very long, so you probably won&apos;t have to wait very
        long to try it out. We cannot wait to have you try out our take on the TiddlyWiki workflow!
      </Typography>
    </>
  );
};

export default Introduction;
