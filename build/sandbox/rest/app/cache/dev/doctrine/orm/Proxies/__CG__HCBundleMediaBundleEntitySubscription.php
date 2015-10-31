<?php

namespace Proxies\__CG__\HC\Bundle\MediaBundle\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Subscription extends \HC\Bundle\MediaBundle\Entity\Subscription implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array();



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return array('__isInitialized__', '' . "\0" . 'HC\\Bundle\\MediaBundle\\Entity\\Subscription' . "\0" . 'homePage', '' . "\0" . 'HC\\Bundle\\MediaBundle\\Entity\\Subscription' . "\0" . 'machineName', '' . "\0" . 'HC\\Bundle\\MediaBundle\\Entity\\Subscription' . "\0" . 'autoDownload');
        }

        return array('__isInitialized__', '' . "\0" . 'HC\\Bundle\\MediaBundle\\Entity\\Subscription' . "\0" . 'homePage', '' . "\0" . 'HC\\Bundle\\MediaBundle\\Entity\\Subscription' . "\0" . 'machineName', '' . "\0" . 'HC\\Bundle\\MediaBundle\\Entity\\Subscription' . "\0" . 'autoDownload');
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Subscription $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', array());
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', array());
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function setHomePage($homePage)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setHomePage', array($homePage));

        return parent::setHomePage($homePage);
    }

    /**
     * {@inheritDoc}
     */
    public function getHomePage()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getHomePage', array());

        return parent::getHomePage();
    }

    /**
     * {@inheritDoc}
     */
    public function setMachineName($machineName)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMachineName', array($machineName));

        return parent::setMachineName($machineName);
    }

    /**
     * {@inheritDoc}
     */
    public function getMachineName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMachineName', array());

        return parent::getMachineName();
    }

    /**
     * {@inheritDoc}
     */
    public function setAutoDownload($autoDownload)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAutoDownload', array($autoDownload));

        return parent::setAutoDownload($autoDownload);
    }

    /**
     * {@inheritDoc}
     */
    public function getAutoDownload()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAutoDownload', array());

        return parent::getAutoDownload();
    }

    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', array());

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function setMediaType($mediaType)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMediaType', array($mediaType));

        return parent::setMediaType($mediaType);
    }

    /**
     * {@inheritDoc}
     */
    public function getMediaType()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMediaType', array());

        return parent::getMediaType();
    }

    /**
     * {@inheritDoc}
     */
    public function setTitle($title)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTitle', array($title));

        return parent::setTitle($title);
    }

    /**
     * {@inheritDoc}
     */
    public function getTitle()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTitle', array());

        return parent::getTitle();
    }

    /**
     * {@inheritDoc}
     */
    public function setDescription($description)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDescription', array($description));

        return parent::setDescription($description);
    }

    /**
     * {@inheritDoc}
     */
    public function getDescription()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDescription', array());

        return parent::getDescription();
    }

    /**
     * {@inheritDoc}
     */
    public function setSrc($src)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSrc', array($src));

        return parent::setSrc($src);
    }

    /**
     * {@inheritDoc}
     */
    public function getSrc()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSrc', array());

        return parent::getSrc();
    }

    /**
     * {@inheritDoc}
     */
    public function setImg($img)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setImg', array($img));

        return parent::setImg($img);
    }

    /**
     * {@inheritDoc}
     */
    public function getImg()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getImg', array());

        return parent::getImg();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreateDate($createDate)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreateDate', array($createDate));

        return parent::setCreateDate($createDate);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreateDate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreateDate', array());

        return parent::getCreateDate();
    }

    /**
     * {@inheritDoc}
     */
    public function setPublic($public)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPublic', array($public));

        return parent::setPublic($public);
    }

    /**
     * {@inheritDoc}
     */
    public function getPublic()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPublic', array());

        return parent::getPublic();
    }

    /**
     * {@inheritDoc}
     */
    public function setModifiedDate($modifiedDate)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setModifiedDate', array($modifiedDate));

        return parent::setModifiedDate($modifiedDate);
    }

    /**
     * {@inheritDoc}
     */
    public function getModifiedDate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getModifiedDate', array());

        return parent::getModifiedDate();
    }

}
