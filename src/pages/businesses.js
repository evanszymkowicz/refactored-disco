import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  return (
  <Layout>
    <div>
      <h1>All Business</h1>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Type of Business</th>
          <th>Offer</th>
        </tr>
      </thead>
      <tbody>
            {data.allGoogleSpreadsheetBusinesses.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.nome}</td>
                <td>{node.location}</td>
                <td>{node.type_of_business}</td>
                <td>{node.offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allGoogleSpreadsheetBusinesses{
      edges {
        node {
          id
          name
          offer
          otherContactForm
          localDistrict
        }
      }
    }
  }
`
