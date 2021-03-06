import React, {useMemo} from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName';

 export const SearchScreen = ({history}) => {
    
    const location = useLocation()
    const {q = ''} = queryString.parse(location.search)
    
    
    const [formValues, handleInputChange] = useForm({
        searchText:q
    })

    const {searchText} = formValues

     const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    // const heroesFiltered = getHeroesByName(searchText)

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)

    }

    return (
        <div className="row">
            <div className='col-lg-5 col-xs-12'>
                <h4>Search Form</h4>
                <hr/>

                <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Find your here"
                    className="form-control"
                    name="searchText"
                    value={searchText}
                    onChange={handleInputChange}
                    />

                <button
                    type="submit"
                    className="btn m-1 btn-block btn-outline-primary"
                >
                Search
                </button>
                </form>
            </div>
            <div className='col-lg-7 col-xs-12'>
                <h4>
                Results
                </h4>
                <hr/>

                {  ( q ==='') && <div className="alert alert-info">
                Search a hero
                </div>}

                {  ( q !=='' && heroesFiltered.length === 0) && <div className="alert alert-danger">
                There is no a hero with {q}
                </div>}

                {
                    heroesFiltered.map(hero => (
                        <HeroCard
                        key={hero.id}
                        {...hero}
                        />
                    ))
                }
            </div>
        </div>
    )
}


