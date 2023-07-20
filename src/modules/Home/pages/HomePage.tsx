import { useCallback, useEffect, useState } from 'react';
import { Box, TextField, Container, Button, Typography } from '@mui/material';
import repoService from '@/services/repoService';
import { Repository } from '../entity';
import { BoxRepository } from '../components';

function HomePage() {
  const [keyword, setKeyword] = useState<string>('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchAllRepos = useCallback(() => {
    return repoService.getAllRepos(keyword).then(setRepositories);
  }, [keyword]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchAllRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      <Container fixed>
        <Typography
          variant='h4'
          component='h1'
          align='center'
          my={4}
          sx={{ fontWeight: 700 }}
        >
          Repository Explorer
        </Typography>
        <TextField
          id='username'
          label='Search username'
          variant='outlined'
          fullWidth
          sx={{ marginBottom: 1 }}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button variant='contained' onClick={fetchAllRepos} fullWidth>
          Search
        </Button>

        <Box mt={4}>
          {repositories.length > 0 ? (
            repositories.map((repository, idx) => (
              <Box key={idx}>
                <BoxRepository repository={repository} />
              </Box>
            ))
          ) : (
            <Typography align='center' color='#CCCCCC'>
              Repository is not found.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
