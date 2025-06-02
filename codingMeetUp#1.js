function countDevelopers(list){
    return list.filter(dev => dev.language === 'JavaScript' && dev.continent === 'Europe').length
}