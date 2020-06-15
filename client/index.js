window.onload = function() {
	var content = new Vue({
		el: '#content',
		data: {
			countries: ['France', 'England', 'United States', 'India', 'New Zealand'],
			countrySelected: null,
			data: [
				{ "country": "France","code":"FRA","year": 1990,"percent": 0.0527778615870672 },
				{ "country": "France","code":"FRA","year": 1991,"percent": 0.140113895433035 },
				{ "country": "France","code":"FRA","year": 1992,"percent": 0.279049463348641 },
				{ "country": "France","code":"FRA","year": 1993,"percent": 0.590619383415946 },
				{ "country": "France","code":"FRA","year": 1994,"percent": 0.899867425301053 },
				{ "country": "France","code":"FRA","year": 1995,"percent": 1.63794724451239 },
				{ "country": "France","code":"FRA","year": 1996,"percent": 2.58403397908468 },
				{ "country": "France","code":"FRA","year": 1997,"percent": 4.25500387171107 },
				{ "country": "France","code":"FRA","year": 1998,"percent": 6.31977872175207 },
				{ "country": "France","code":"FRA","year": 1999,"percent": 9.12531788860536 },
				{ "country": "France","code":"FRA","year": 2000,"percent": 14.3079239430677 },
				{ "country": "France","code":"FRA","year": 2001,"percent": 26.3259035521688 },
				{ "country": "France","code":"FRA","year": 2002,"percent": 30.18 },
				{ "country": "France","code":"FRA","year": 2003,"percent": 36.14 },
				{ "country": "France","code":"FRA","year": 2004,"percent": 39.15 },
				{ "country": "France","code":"FRA","year": 2005,"percent": 42.87 },
				{ "country": "France","code":"FRA","year": 2006,"percent": 46.87 },
				{ "country": "France","code":"FRA","year": 2007,"percent": 66.09 },
				{ "country": "France","code":"FRA","year": 2008,"percent": 70.68 },
				{ "country": "France","code":"FRA","year": 2009,"percent": 71.58 },
				{ "country": "France","code":"FRA","year": 2010,"percent": 77.28 },
				{ "country": "France","code":"FRA","year": 2011,"percent": 77.8199989926706 },
				{ "country": "France","code":"FRA","year": 2012,"percent": 81.44 },
				{ "country": "France","code":"FRA","year": 2013,"percent": 81.9198 },
				{ "country": "France","code":"FRA","year": 2014,"percent": 83.75 },
				{ "country": "France","code":"FRA","year": 2015,"percent": 78.01 },
				{ "country": "France","code":"FRA","year": 2016,"percent": 79.27 },
				{ "country": "France","code":"FRA","year": 2017,"percent": 80.5 },
				{ "country": "United States","code":"USA","year": 1990,"percent": 0.784728502202794 },
				{ "country": "United States","code":"USA","year": 1991,"percent": 1.16319372626656 },
				{ "country": "United States","code":"USA","year": 1992,"percent": 1.72420253908365 },
				{ "country": "United States","code":"USA","year": 1993,"percent": 2.27167329376237 },
				{ "country": "United States","code":"USA","year": 1994,"percent": 4.862780634624 },
				{ "country": "United States","code":"USA","year": 1995,"percent": 9.23708829729378 },
				{ "country": "United States","code":"USA","year": 1996,"percent": 16.4193529600768 },
				{ "country": "United States","code":"USA","year": 1997,"percent": 21.6164009686742 },
				{ "country": "United States","code":"USA","year": 1998,"percent": 30.093196588091 },
				{ "country": "United States","code":"USA","year": 1999,"percent": 35.8487244559914 },
				{ "country": "United States","code":"USA","year": 2000,"percent": 43.0791626375201 },
				{ "country": "United States","code":"USA","year": 2001,"percent": 49.0808315896951 },
				{ "country": "United States","code":"USA","year": 2002,"percent": 58.7854038836952 },
				{ "country": "United States","code":"USA","year": 2003,"percent": 61.6971171244207 },
				{ "country": "United States","code":"USA","year": 2004,"percent": 64.7582564759896 },
				{ "country": "United States","code":"USA","year": 2005,"percent": 67.968052915002 },
				{ "country": "United States","code":"USA","year": 2006,"percent": 68.9311932699721 },
				{ "country": "United States","code":"USA","year": 2007,"percent": 75 },
				{ "country": "United States","code":"USA","year": 2008,"percent": 74 },
				{ "country": "United States","code":"USA","year": 2009,"percent": 71 },
				{ "country": "United States","code":"USA","year": 2010,"percent": 71.69 },
				{ "country": "United States","code":"USA","year": 2011,"percent": 69.7294607619268 },
				{ "country": "United States","code":"USA","year": 2012,"percent": 74.7 },
				{ "country": "United States","code":"USA","year": 2013,"percent": 71.4 },
				{ "country": "United States","code":"USA","year": 2014,"percent": 73 },
				{ "country": "United States","code":"USA","year": 2015,"percent": 74.5542024462761 },
				{ "country": "United States","code":"USA","year": 2016,"percent": 76.176736982841 },
				{ "country": "India","code":"IND","year": 1990,"percent": 0 },
				{ "country": "India","code":"IND","year": 1992,"percent": 0.00011130772730678 },
				{ "country": "India","code":"IND","year": 1993,"percent": 0.00021817567673486 },
				{ "country": "India","code":"IND","year": 1994,"percent": 0.0010695623867526 },
				{ "country": "India","code":"IND","year": 1995,"percent": 0.0262288788137051 },
				{ "country": "India","code":"IND","year": 1996,"percent": 0.0463339767355146 },
				{ "country": "India","code":"IND","year": 1997,"percent": 0.0707678487089183 },
				{ "country": "India","code":"IND","year": 1998,"percent": 0.13902732879964 },
				{ "country": "India","code":"IND","year": 1999,"percent": 0.27322427673499 },
				{ "country": "India","code":"IND","year": 2000,"percent": 0.527532449930946 },
				{ "country": "India","code":"IND","year": 2001,"percent": 0.660146377009928 },
				{ "country": "India","code":"IND","year": 2002,"percent": 1.53787558175083 },
				{ "country": "India","code":"IND","year": 2003,"percent": 1.68648997063625 },
				{ "country": "India","code":"IND","year": 2004,"percent": 1.97613649190559 },
				{ "country": "India","code":"IND","year": 2005,"percent": 2.38807499995774 },
				{ "country": "India","code":"IND","year": 2006,"percent": 2.80549986534254 },
				{ "country": "India","code":"IND","year": 2007,"percent": 3.95 },
				{ "country": "India","code":"IND","year": 2008,"percent": 4.38 },
				{ "country": "India","code":"IND","year": 2009,"percent": 5.12 },
				{ "country": "India","code":"IND","year": 2010,"percent": 7.5 },
				{ "country": "India","code":"IND","year": 2011,"percent": 10.07 },
				{ "country": "India","code":"IND","year": 2012,"percent": 12.5800609138955 },
				{ "country": "India","code":"IND","year": 2013,"percent": 15.1 },
				{ "country": "India","code":"IND","year": 2014,"percent": 21 },
				{ "country": "India","code":"IND","year": 2015,"percent": 26 },
				{ "country": "India","code":"IND","year": 2016,"percent": 29.5471628858754 },
				{ "country": "New Zealand","code":"NZL","year": 1992,"percent": 0.28594124136243 },
				{ "country": "New Zealand","code":"NZL","year": 1993,"percent": 0.631215367316847 },
				{ "country": "New Zealand","code":"NZL","year": 1994,"percent": 3.16871884839389 },
				{ "country": "New Zealand","code":"NZL","year": 1995,"percent": 4.88424078004581 },
				{ "country": "New Zealand","code":"NZL","year": 1996,"percent": 8.04189936796032 },
				{ "country": "New Zealand","code":"NZL","year": 1997,"percent": 14.6015243991473 },
				{ "country": "New Zealand","code":"NZL","year": 1998,"percent": 31.636260808802 },
				{ "country": "New Zealand","code":"NZL","year": 1999,"percent": 41.4944826585159 },
				{ "country": "New Zealand","code":"NZL","year": 2000,"percent": 47.3795565432096 },
				{ "country": "New Zealand","code":"NZL","year": 2001,"percent": 53.2410152941279 },
				{ "country": "New Zealand","code":"NZL","year": 2002,"percent": 59.0807532812931 },
				{ "country": "New Zealand","code":"NZL","year": 2003,"percent": 60.9625398663824 },
				{ "country": "New Zealand","code":"NZL","year": 2004,"percent": 61.8476278106481 },
				{ "country": "New Zealand","code":"NZL","year": 2005,"percent": 62.7202123689541 },
				{ "country": "New Zealand","code":"NZL","year": 2006,"percent": 69 },
				{ "country": "New Zealand","code":"NZL","year": 2007,"percent": 69.76 },
				{ "country": "New Zealand","code":"NZL","year": 2008,"percent": 72.03 },
				{ "country": "New Zealand","code":"NZL","year": 2009,"percent": 79.7 },
				{ "country": "New Zealand","code":"NZL","year": 2010,"percent": 80.46 },
				{ "country": "New Zealand","code":"NZL","year": 2011,"percent": 81.23 },
				{ "country": "New Zealand","code":"NZL","year": 2012,"percent": 81.644470179502 },
				{ "country": "New Zealand","code":"NZL","year": 2013,"percent": 82.78 },
				{ "country": "New Zealand","code":"NZL","year": 2014,"percent": 85.5 },
				{ "country": "New Zealand","code":"NZL","year": 2015,"percent": 88.22288881795 },
				{ "country": "New Zealand","code":"NZL","year": 2016,"percent": 88.470186347099 },
				{ "country": "Afghanistan","code":"AFG","year": 1990,"percent": 0 },
				{ "country": "Afghanistan","code":"AFG","year": 2001,"percent": 0.00472256824217368 },
				{ "country": "Afghanistan","code":"AFG","year": 2002,"percent": 0.00456139517022146 },
				{ "country": "Afghanistan","code":"AFG","year": 2003,"percent": 0.0878912528559713 },
				{ "country": "Afghanistan","code":"AFG","year": 2004,"percent": 0.105809030021958 },
				{ "country": "Afghanistan","code":"AFG","year": 2005,"percent": 1.22414808372471 },
				{ "country": "Afghanistan","code":"AFG","year": 2006,"percent": 2.10712364546412 },
				{ "country": "Afghanistan","code":"AFG","year": 2007,"percent": 1.9 },
				{ "country": "Afghanistan","code":"AFG","year": 2008,"percent": 1.84 },
				{ "country": "Afghanistan","code":"AFG","year": 2009,"percent": 3.55 },
				{ "country": "Afghanistan","code":"AFG","year": 2010,"percent": 4 },
				{ "country": "Afghanistan","code":"AFG","year": 2011,"percent": 5 },
				{ "country": "Afghanistan","code":"AFG","year": 2012,"percent": 5.45454545454545 },
				{ "country": "Afghanistan","code":"AFG","year": 2013,"percent": 5.9 },
				{ "country": "Afghanistan","code":"AFG","year": 2014,"percent": 7 },
				{ "country": "Afghanistan","code":"AFG","year": 2015,"percent": 8.26 },
				{ "country": "Afghanistan","code":"AFG","year": 2016,"percent": 10.5957264186601 }
			]
		},
		methods: {
			getData: function() {
				this.$http.get('/searchFor?country=' + this.countrySelected).then(response => {
					if (response.body[0]) {
						content.data = response.body[0]
						this.$forceUpdate();
					}
				})
			}
		},
		mounted: function() {
			const margin = {top: 20, right: 20, bottom: 90, left: 120}, width = 800 - margin.left - margin.right, height = 400 - margin.top - margin.bottom;

			const x = d3.scaleBand().range([0, width]).padding(0.1);

			const y = d3.scaleLinear().range([height, 0]);

			const svg = d3.select("#chart").append("svg")
				.attr("id", "svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			const div = d3.select("body").append("div")
			  .attr("class", "tooltip")
			  .style("opacity", 0);

				x.domain(this.data.map(d => d.year));
				y.domain([0, d3.max(this.data, d => d.percent)]);

				svg.append("g")
						.attr("transform", "translate(0," + height + ")")
						.call(d3.axisBottom(x).tickSize(0))
						.selectAll("text")
								.style("text-anchor", "end")
								.attr("dx", "-.8em")
								.attr("dy", ".15em")
								.attr("transform", "rotate(-65)");

				svg.append("g")
				        .call(d3.axisLeft(y).ticks(6));

				svg.selectAll(".bar")
				        .data(this.data)
				    .enter().append("rect")
				        .attr("class", "bar")
				        .attr("x", d => x(d.year))
				        .attr("width", x.bandwidth())
				        .attr("y", d => y(d.percent))
				        .attr("height", d => height - y(d.percent))
				        .on("mouseover", function(d) {
				            div.transition()
				                .duration(200)
				                .style("opacity", .9);
				            div.html("Population : " + d.percent + '%')
				                .style("left", (d3.event.pageX + 10) + "px")
				                .style("top", (d3.event.pageY - 50) + "px");
				        })
				        .on("mouseout", function(d) {
				            div.transition()
				                .duration(500)
				                .style("opacity", 0);
				        });
		}
	})
}
