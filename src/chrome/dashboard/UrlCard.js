import { Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

class UrlCard extends React.Component {
  render () {
    const { data, alreadyPresent, onAddClick, onDeleteClick } = this.props;


    const addButton = !alreadyPresent && onAddClick ? (
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            onAddClick();
          }}
        >
          Add to current video
        </Button>
      </CardActions>
    ) : null;

    const deleteButton = alreadyPresent && onDeleteClick ? (
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              onDeleteClick();
            }}
          >
            Remove from current video
          </Button>
        </CardActions>
    ) : null

    return (
      <Card
        style={{
          textAlign: 'left',
          margin: '6px'
        }}
      >
        <CardActionArea>
          {data.image ? (
            <CardMedia
              component="img"
              style={{ height: '120px', paddingTop: '2%' }}
              src={data.image}
              title={data.title}
            />
          ) : (
            <small>
              🗲<code>𝕟𝕠 𝕡𝕚𝕔𝕥𝕦𝕣𝕖</code>
            </small>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="small">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {addButton || deleteButton}
      </Card>
    );
  }
}

export default UrlCard;
