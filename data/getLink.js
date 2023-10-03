



export const getLink = (link)=>{

    if (link.includes(' ')) {
        return link.replaceAll(' ', '-').toLowerCase();
      } else {
        return link;
      }

}


export const revLink = (link) => {
  if (link.includes('-')) {
    return link.replaceAll('-', ' ')
               .toLowerCase()
               .split(' ')
               .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
  } else {
    return link;
  }
};