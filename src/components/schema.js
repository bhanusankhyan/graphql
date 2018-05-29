import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {graphql, GraphQLSchema, buildSchema, GraphQLObjectType, GraphQLString} from 'graphql'




function fetchResponsebyURL(){
  return fetch("https://api.github.com/users/bhanusankhyan/repos").then(res => res.json())
}

const Data = new GraphQLObjectType({
  fields : () => ({
    fetchResponsebyURL
  }),
});
export default new GraphQLSchema({
  query: Data,
});

