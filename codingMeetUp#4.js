function getFirstPython(list){
    const newList = list.find(dev => dev.language === 'Python')

    return newList ? `${newList.firstName}, ${newList.country}` : 'There will be no Python developers'
}