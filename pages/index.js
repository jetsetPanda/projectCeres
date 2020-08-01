import ProductsSection from "../components/ProductsSection";
import styled from "styled-components";

const Index = props => {
  return (
        <Wrapper>
          <ProductsSection productList={props.productList}/>
        </Wrapper>
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

const Wrapper = styled.div`
  width: 90vw;
    margin: 0 auto
`

export default Index;