import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';

export default class MovieDialog extends React.Component {


  render() {
      const {movie, handleClose} = this.props

      let title = null;
      let content = null

      if(movie){
          title = <DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>
          content = 
          <DialogContent>
          <h3>Popular by: {movie.popularity}</h3>
          <h3>Average Vote: {movie.vote_average}</h3>
            <DialogContentText>
                {movie.overview}
            </DialogContentText>
            <CardMedia
            component="img"
            className="movie-detail-img "
            alt="Poster"
            width="513"
            height="342"
            image={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            title="Poster"
            />
            <TextField
                label="Release Date"
                type="date"
                value={movie.release_date}
                disabled
                
                fullWidth
            />
         

        </DialogContent>
      }
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={!!movie}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          {title}
          {content}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Back
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}