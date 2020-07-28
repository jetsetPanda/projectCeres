import Products from "./products";

const Index = props => {
  return (
      <React.Fragment>
        <Products productList={props.productList}/>
      </React.Fragment>
  );
}

/**
 * @Omar Ong: I'm choosing the NextJS method *getServerSideProps* - which fetches data at request time - as I imagine that appliance/product inventory and other datapoints can change dynamically throughout the day -- otherwise if the data would be more static, I will use getStaticProps since one time fetch and caching static props will be more economical on the api side.
 */
export async function getServerSideProps() {

  /**
   * @Omar: btw the provided api url results in only "is_quick_ship: false" SKUs
   * const res = await fetch(`https://demo3211013.mockable.io/ajmad`)
   *
   * Thus, to confirm my UI, I tweaked the JSON a bit and set several SKU items as Quickship products
   * of course I can do local dummy data, but mockable is fun....
   */
  const res = await fetch(`https://demo4893163.mockable.io/`)
  const data = await res.json()

  return {
    props: {
      productList: data
    },
  }
}

export default Index;