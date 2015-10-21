<?php
/**
 * Created by PhpStorm.
 * User: shawn
 * Date: 10/21/15
 * Time: 11:21 AM
 */

namespace HC\Bundle\MediaBundle\Services;

use HC\Bundle\CoreBundle\Services\ConfigService;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class MediaService
{
    protected $configService;
    protected $serializer;

    public function getConfigService()
    {
        if(isset($this->configService))
            return $this->configService;
        return $this->configService = new ConfigService();
    }


    public function getSerializer()
    {
        if(isset($this->serializer))
            return $this->serializer;
        $normalizers = array(new ObjectNormalizer());
        $encoders = array(new JsonEncoder());
        return $this->serializer = new Serializer($normalizers, $encoders);
    }


}