import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Developer = ({ name, role, bio, socialLinks, avatarUrl, collegeName }) => {
  return (
    <Card className="m-3">
      <CardContent>
      <Avatar alt={name} src={avatarUrl} sx={{ width: 100, height: 100, marginBottom: 2 }} />
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {collegeName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {role}
        </Typography>
        <Typography variant="body2" component="p">
          {bio}
        </Typography>
        <div className="social-links">
        <Link href={socialLinks} target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Developer