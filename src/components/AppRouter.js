import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { publicRoutes } from '../routes'
import { MAIN_PAGE } from '../utils/constans'

export const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={MAIN_PAGE} />
    </Switch>
  )
}
