import { Card, CardContent, Typography } from '@material-ui/core';
import { YCAITheme,makeStyles, useTheme } from '../../theme';
import * as React from 'react';

interface StatsBoxProps {
  header: string;
  icon?: React.ReactElement;
  count: number;
  color?: string;
}

const useStyles = makeStyles<YCAITheme, { color: string }>(() => ({
  root: {
    marginBottom: 20,
    border: `1px solid transparent`,
    '&:hover': {
      border: (props) => `1px solid ${props.color}`,
    },
  },
  content: {
    textAlign: 'center',
    color: (props) => props.color,
  },
}));

export const StatsCard: React.FC<StatsBoxProps> = ({
  header,
  count,
  icon,
  color,
}) => {
  const theme = useTheme();
  const classes = useStyles({ color: color ?? theme.palette.text.primary });
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        {icon ?? null}
        <Typography variant="h5">{header}</Typography>
        <Typography variant="h3">{count}</Typography>
      </CardContent>
    </Card>
  );
};
