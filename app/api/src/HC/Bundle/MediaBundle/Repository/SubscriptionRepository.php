<?php

namespace HC\Bundle\MediaBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\ORM\Query;

/**
 * SubscriptionRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SubscriptionRepository extends EntityRepository
{

    private $dqlStart = 'SELECT e, s FROM HCMediaBundle:Subscription e JOIN e.subscription s ';

    public function fetchEpisodes($start = 0, $count = NULL, $subscriptionId =  NULL)
    {
        $dql = $this->dqlStart;

        if($subscriptionId !==NULL){
            $dql .= ' WHERE (e.subscription = :subscriptionId)';
        }
        $dql .= ' ORDER BY e.pubDate DESC';

        $query = $this->getEntityManager()->createQuery($dql)
            ->setFirstResult($start)
            ->setMaxResults($count);

        if($subscriptionId !== NULL){
            $query->setParameters(array(
                'subscriptionId' => $subscriptionId
            ));
        }

        $result = $query->getResult();
        return $result;
    }


    public function findManySubscriptions($start, $count)
    {
        $query = $this->getEntityManager()
            ->createQuery(
                'SELECT s, m FROM HCMediaBundle:Subscription s
          JOIN s.media m
          ORDER BY s.createDate DESC'
            )
            ->setFirstResult($start)
            ->setMaxResults($count);

        try {
            $paginator = new Paginator($query, $fetchJoinCollection = true);
            return $paginator;

        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

    public function deleteSubscription($sid)
    {
        $query = $this->getEntityManager()

            ->createQuery(
                'DELETE FROM HCMediaBundle:Subscription s
          JOIN s.media m
          JOIN m.episodes e
          JOIN m.podcast p
          WHERE s.id = :url')
            ->setParameter('id', $sid);

        try {
            return $query->getSingleResult();

        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }



}
