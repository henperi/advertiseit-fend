import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ProductCard } from '../../components/Cards/Product';
import { fetchProducts } from '../../store/modules/products/actions';
import { useGlobalStore } from '../../store';
// import { rootReducer } from '../../store/modules';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Home = () => {
  const classes = useStyles({});
  const { state, dispatch } = useGlobalStore();
  // const [store, dispatch] = useReducer(rootReducer, state);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {state.products.map((product) => (
          <Grid key={product.id + product.title} item xs={12} sm={6} md={4}>
            <ProductCard
              Owner={product.Owner}
              title={product.title}
              image={product.ProductImages[0].image}
              price={product.price}
            />
          </Grid>
        ))}

      </Grid>
    </div>
  );
};

export default Home;
