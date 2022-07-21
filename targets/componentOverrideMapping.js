// File: src/targets/componentOverrideMapping.js

// We will define which file should be replace, and
// the location of the file will be use to replace

// You could replace others package like @magento/peregrine,
// or even @magento/pagebuilder
module.exports = componentOverrideMapping = {
    [`@magento/venia-ui/lib/components/Gallery/item.js`]: 'src/components/ProductList/views/item.js',
    [`@magento/venia-ui/lib/components/Price/price.js`]: 'src/components/Price/price.js',
    [`@magento/venia-ui/lib/components/Gallery/gallery.js`]: 'src/components/ProductList/views/gallery.js',    
    [`@magento/venia-ui/lib/components/FilterModal/CurrentFilters/currentFilter.js`]: 'src/components/FilterModal/CurrentFilters/currentFilter.js',    
    [`@magento/peregrine/lib/talons/RootComponents/Category/categoryFragments.gql.js`]: 'src/components/Category/categoryFragments.gql.js',    
};
