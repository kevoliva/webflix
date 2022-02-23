import data from './dataGenre.json';
import useStyles from './Genre.style';

function Genre({ id }) {
    const classes = useStyles();
    console.log(useStyles);
    const label = data.genres[id];
    if (!label) return null;
    return (
        <div data-testid="genre" className={classes.root}>
        {label}
      </div>
    );
}

export default Genre;