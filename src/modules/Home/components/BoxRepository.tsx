import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore, Star } from '@mui/icons-material';
import { Repository } from '../entity';
import { useEffect, useState } from 'react';

type BoxRepositoryProps = {
  repository: Repository;
};

function BoxRepository({ repository }: BoxRepositoryProps) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [repository]);

  return (
    <Paper sx={{ marginBottom: 2 }}>
      <List>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemText primary={repository.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit sx={{ padding: 2 }}>
          <List
            component='div'
            disablePadding
            sx={{ border: '1px solid #CCCCCC', marginBottom: 1 }}
          >
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemText primary='Starred' sx={{ fontWeight: 'bold' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography>{repository.stargazers_count}</Typography>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
              </Box>
            </ListItemButton>
            <Box p={2}>
              <Typography variant='body2'>{repository.description}</Typography>
            </Box>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
}

export default BoxRepository;
