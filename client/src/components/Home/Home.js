import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import {Searchresult} from "../../components/Searchresult";

class Home extends Component {


  state = {
    search: "",
    startDate: "",
    endDate: "",
    articles: [],
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search && this.state.startDate && this.state.endDate) {
      API.searchArticles({
        "api-key": "985ea6ce339c4406a9745e2267215aac",
        search: this.state.search,
        begin_date: this.state.startDate+"0101",
        end_date: this.state.endDate+"1229",
        sort: "newest"
      })
        .then(res =>
          this.setState({ articles: res.data.response.docs })
        )
        .catch(err => console.log(err));
    }
  };

  saveArticle = event =>{
    API.saveArticle({
    title: event[0],
    url: event[2],
    date: event[1]
    })
      .then(res => console.log("saved")
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>

        <div className="container">

          <div className="row searchWindow">
            <div className="col-md-12">
              <div class="panel panel-primary">
                <div class="panel-heading">
                 <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                  </div>
                <div class="panel-body">
                  <form>
                    <Input
                      value= {this.state.search}
                      onChange={this.handleInputChange}
                      label= "Search Topic"
                      id= "searchString"
                      name= "search"
                      placeholder= "Search Topic"
                      >
                    </Input>
                    <Input
                      value= {this.state.startDate}
                      onChange={this.handleInputChange}
                      label= "Start Year"
                      id= "startYear"
                      name= "startDate"
                      placeholder= "YYYY"
                      >
                    </Input>
                    <Input
                      value= {this.state.endDate}
                      onChange={this.handleInputChange}
                      label= "End Year"
                      id= "endYear"
                      name= "endDate"
                      placeholder= "YYYY"
                      >
                    </Input>
                    <FormBtn
                      disabled={!(this.state.search && this.state.startDate && this.state.endDate)}
                      onClick={this.handleFormSubmit}
                    />
                  </form>
              </div>
              </div>
            </div>
          </div>

          <div className="row resultsWindow">
            <div className="col-md-12">
              <div className="card">
                <h5 className="card-header">Search Results</h5>
                <div className="card-body">
                  {this.state.articles.length ? (
                    <div>
                    {this.state.articles.map(article => {
                      const date= article.pub_date.split("T")
                      return (
                        <Searchresult
                          key={article.headline.main}
                          title={article.headline.main}
                          date={date[0]}
                          url={article.web_url}
                          onClick={() => this.saveArticle([article.headline.main, date[0], article.web_url])}
                        />
                      );
                    })}
                  </div>
                  ) : (
                      <h3>No Results to Display</h3>
                    )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
}


export default Home;